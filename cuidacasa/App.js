// CuidaCasa para Android: abre o CuidaCasa dentro de uma WebView (uma "janela" do app).
// O conteúdo do app fica no arquivo app-html.js, gerado a partir de cuidacasa.html.
import React, { useEffect, useRef } from 'react';
import { BackHandler, Linking, StatusBar, useColorScheme } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HTML from './app-html';

const h = React.createElement;
// Endereço de mentira só para o Android guardar os dados do app de forma permanente.
const BASE = 'https://cuidacasa.invalid/';

// Botão "voltar" do Android: fecha a janela aberta, volta uma tela ou sai do app.
const VOLTAR_JS = `(function(){
  var m=document.getElementById('modal');
  if(m&&m.classList.contains('open')){
    var b=m.querySelector('[data-a=close],[data-a=lgno],[data-a=invno],[data-a=cancelnp]');
    if(b){b.click();}
    return;
  }
  var v=document.querySelector('main [data-a=pat][data-v="0"]')||document.querySelector('main [data-a=cancelnp]');
  if(v){v.click();return;}
  window.ReactNativeWebView.postMessage('sair');
})();true;`;

export default function App() {
  const ref = useRef(null);
  const escuro = useColorScheme() === 'dark';
  const fundo = escuro ? '#0B1B26' : '#F6F8FA';

  useEffect(function () {
    const sub = BackHandler.addEventListener('hardwareBackPress', function () {
      if (ref.current) ref.current.injectJavaScript(VOLTAR_JS);
      return true;
    });
    return function () { sub.remove(); };
  }, []);

  // Links externos (WhatsApp, telefone) abrem fora do app; o resto fica dentro.
  function permitir(req) {
    const u = req.url || '';
    if (u.indexOf('about:') === 0 || u.indexOf('data:') === 0 || u.indexOf('blob:') === 0 || u.indexOf(BASE) === 0) return true;
    Linking.openURL(u).catch(function () {});
    return false;
  }

  return h(SafeAreaProvider, null,
    h(SafeAreaView, { style: { flex: 1, backgroundColor: fundo } },
      h(StatusBar, { barStyle: escuro ? 'light-content' : 'dark-content', backgroundColor: fundo }),
      h(WebView, {
        ref: ref,
        originWhitelist: ['*'],
        source: { html: HTML, baseUrl: BASE },
        javaScriptEnabled: true,
        domStorageEnabled: true,
        geolocationEnabled: true,
        setSupportMultipleWindows: false,
        textZoom: 100,
        overScrollMode: 'never',
        onShouldStartLoadWithRequest: permitir,
        onMessage: function (e) { if (e.nativeEvent.data === 'sair') BackHandler.exitApp(); },
        style: { flex: 1, backgroundColor: fundo }
      })
    )
  );
}
