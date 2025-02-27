import { registerPlugin } from '@capacitor/core';

import type { AmusoireBarcodeScannerPlugin } from './definitions';

const AmusoireBarcodeScanner = registerPlugin<AmusoireBarcodeScannerPlugin>('AmusoireBarcodeScanner', {
  web: () => import('./web').then((m) => new m.AmusoireBarcodeScannerWeb()),
});

export * from './definitions';
export { AmusoireBarcodeScanner };
