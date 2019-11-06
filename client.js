// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Create separate panels for buttons and info
  const buttonsPanel = new Surface(
    400,
    400,
    Surface.SurfaceShape.Flat
  )

  buttonsPanel.setAngle(
    -0.6,
    0.1
  )

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('ConnectedButtonInfoPanel', { /* initial props */ }),

    // Use custom surfaces for button and info
    // Comment below line to use the default surface instead
    buttonsPanel

    // Uncomment below to use the default surface instead
    // r360.getDefaultSurface()
  );

  const infoPanel = new Surface(
    400,
    400,
    Surface.SurfaceShape.Flat
  )

  infoPanel.setAngle(
    0.6,
    0.1
  )

  // Render the second surface (infoPanel)
  r360.renderToSurface(
    r360.createRoot('ConnectedHouseInfoPanel', { /* initial props */ }),
    infoPanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_front_door.jpg'));
}

window.React360 = { init };
