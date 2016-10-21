// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('firebase-push.js');
// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': 'YOUR-SENDER-ID'
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END background_handler]

var messageQueue = [];
var clients;
self.addEventListener("message", function (e) {
  if (e.data === "register worker!") {
    e.source.postMessage("Hello! Your message was: " + e.data);
    client = e.source;
  }
});

self.addEventListener("push", onRecieveMessage.bind(self), !1);

function onRecieveMessage(payload) {
  console.log(payload);
  messageQueue.push(payload);
  getClient().then(function(a) {
    a.postMessage("test!!");
  })
}

self.addEventListener('message', function (event) {
  event.ports[0].postMessage({ 'test': 'This is my response.' });
});

function getClient() {
 return self.clients.matchAll({
  type: "window",
  includeUncontrolled: !0
}).then(function (a) {
   for(let i = 0 ; i<a.length; i++){
     if("visible" === a[i].visibilityState){
       return a[i];
     }
   }
})
}