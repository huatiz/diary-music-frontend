declare global {
  interface Window {
    onSpotifyIframeApiReady: (IFrameAPI: any) => void
  }
}

export {}
