# electron-webview-ipc-test
A test to demonstrate an IPC issue in Electron with a webview.

When ran IPC will kick off via the webviews preload script and everything will be fine until the webviews src is changed. Our IPC handler will be gone and we will stop getting IPC notifications.
