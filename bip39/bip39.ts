const bip39 = require('bip39');
const bip32 = require('bip32');

export function createMnemonic (number: number, language: string) {
  switch (language) {
    case 'chinese_simplified':
      if (number === 12) {
        return bip39.generateMnemonic(128, null, bip39.wordlists.chinese_simplified);
      } else if (number === 15) {
        return bip39.generateMnemonic(160, null, bip39.wordlists.chinese_simplified);
      } else if (number === 18) {
        return bip39.generateMnemonic(192, null, bip39.wordlists.chinese_simplified);
      } else if (number === 21) {
        return bip39.generateMnemonic(224, null, bip39.wordlists.chinese_simplified);
      } else if (number === 24) {
        return bip39.generateMnemonic(256, null, bip39.wordlists.chinese_simplified);
      } else {
        return 'unsupported';
      }
    case 'chinese_traditional':
      if (number === 12) {
        return bip39.generateMnemonic(128, null, bip39.wordlists.chinese_traditional);
      } else if (number === 15) {
        return bip39.generateMnemonic(160, null, bip39.wordlists.chinese_traditional);
      } else if (number === 18) {
        return bip39.generateMnemonic(192, null, bip39.wordlists.chinese_traditional);
      } else if (number === 21) {
        return bip39.generateMnemonic(224, null, bip39.wordlists.chinese_traditional);
      } else if (number === 24) {
        return bip39.generateMnemonic(256, null, bip39.wordlists.chinese_traditional);
      } else {
        return 'unsupported';
      }
    case 'english':
      if (number === 12) {
        return bip39.generateMnemonic(128, null, bip39.wordlists.english);
      } else if (number === 15) {
        return bip39.generateMnemonic(160, null, bip39.wordlists.english);
      } else if (number === 18) {
        return bip39.generateMnemonic(192, null, bip39.wordlists.english);
      } else if (number === 21) {
        return bip39.generateMnemonic(224, null, bip39.wordlists.english);
      } else if (number === 24) {
        return bip39.generateMnemonic(256, null, bip39.wordlists.english);
      } else {
        return 'unsupported';
      }
    case 'french':
      if (number === 12) {
        return bip39.generateMnemonic(128, null, bip39.wordlists.french);
      } else if (number === 15) {
        return bip39.generateMnemonic(160, null, bip39.wordlists.french);
      } else if (number === 18) {
        return bip39.generateMnemonic(192, null, bip39.wordlists.french);
      } else if (number === 21) {
        return bip39.generateMnemonic(224, null, bip39.wordlists.french);
      } else if (number === 24) {
        return bip39.generateMnemonic(256, null, bip39.wordlists.french);
      } else {
        return 'unsupported';
      }
    case 'italian':
      if (number === 12) {
        return bip39.generateMnemonic(128, null, bip39.wordlists.italian);
      } else if (number === 15) {
        return bip39.generateMnemonic(160, null, bip39.wordlists.italian);
      } else if (number === 18) {
        return bip39.generateMnemonic(192, null, bip39.wordlists.italian);
      } else if (number === 21) {
        return bip39.generateMnemonic(224, null, bip39.wordlists.italian);
      } else if (number === 24) {
        return bip39.generateMnemonic(256, null, bip39.wordlists.italian);
      } else {
        return 'unsupported';
      }
    case 'japanese':
      if (number === 12) {
        return bip39.generateMnemonic(128, null, bip39.wordlists.japanese);
      } else if (number === 15) {
        return bip39.generateMnemonic(160, null, bip39.wordlists.japanese);
      } else if (number === 18) {
        return bip39.generateMnemonic(192, null, bip39.wordlists.japanese);
      } else if (number === 21) {
        return bip39.generateMnemonic(224, null, bip39.wordlists.japanese);
      } else if (number === 24) {
        return bip39.generateMnemonic(256, null, bip39.wordlists.japanese);
      } else {
        return 'unsupported';
      }
    case 'korean':
      if (number === 12) {
        return bip39.generateMnemonic(128, null, bip39.wordlists.korean);
      } else if (number === 15) {
        return bip39.generateMnemonic(160, null, bip39.wordlists.korean);
      } else if (number === 18) {
        return bip39.generateMnemonic(192, null, bip39.wordlists.korean);
      } else if (number === 21) {
        return bip39.generateMnemonic(224, null, bip39.wordlists.korean);
      } else if (number === 24) {
        return bip39.generateMnemonic(256, null, bip39.wordlists.korean);
      } else {
        return 'unsupported';
      }
    case 'spanish':
      if (number === 12) {
        return bip39.generateMnemonic(128, null, bip39.wordlists.spanish);
      } else if (number === 15) {
        return bip39.generateMnemonic(160, null, bip39.wordlists.spanish);
      } else if (number === 18) {
        return bip39.generateMnemonic(192, null, bip39.wordlists.spanish);
      } else if (number === 21) {
        return bip39.generateMnemonic(224, null, bip39.wordlists.spanish);
      } else if (number === 24) {
        return bip39.generateMnemonic(256, null, bip39.wordlists.spanish);
      } else {
        return 'unsupported';
      }
    default:
      return 'unsupported';
  }
}

export function mnemonicToEntropy (mnemonic: string, language: string) {
  switch (language) {
    case 'chinese_simplified':
      return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.chinese_simplified);
    case 'chinese_traditional':
      return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.chinese_traditional);
    case 'english':
      return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.english);
    case 'french':
      return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.french);
    case 'italian':
      return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.italian);
    case 'japanese':
      return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.japanese);
    case 'korean':
      return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.korean);
    case 'spanish':
      return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.spanish);
    default:
      return 'unsupported';
  }
}

export function entropyToMnemonic (encrytMnemonic:string, language:string) {
  switch (language) {
    case 'chinese_simplified':
      return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.chinese_simplified);
    case 'chinese_traditional':
      return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.chinese_traditional);
    case 'english':
      return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.english);
    case 'french':
      return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.french);
    case 'italian':
      return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.italian);
    case 'japanese':
      return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.japanese);
    case 'korean':
      return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.korean);
    case 'spanish':
      return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.spanish);
    default:
      return 'unsupported';
  }
}

export function mnemonicToSeed (mnemonic, password) {
  return bip39.mnemonicToSeed(mnemonic, password);
}

export function mnemonicToSeedSync (mnemonic, password) {
  return bip39.mnemonicToSeedSync(mnemonic, password);
}

export function validateMnemonic (mnemonic, language) {
  switch (language) {
    case 'chinese_simplified':
      return bip39.validateMnemonic(mnemonic, bip39.wordlists.chinese_simplified);
    case 'chinese_traditional':
      return bip39.validateMnemonic(mnemonic, bip39.wordlists.chinese_traditional);
    case 'english':
      return bip39.validateMnemonic(mnemonic, bip39.wordlists.english);
    case 'french':
      return bip39.validateMnemonic(mnemonic, bip39.wordlists.french);
    case 'italian':
      return bip39.validateMnemonic(mnemonic, bip39.wordlists.italian);
    case 'japanese':
      return bip39.validateMnemonic(mnemonic, bip39.wordlists.japanese);
    case 'korean':
      return bip39.validateMnemonic(mnemonic, bip39.wordlists.korean);
    case 'spanish':
      return bip39.validateMnemonic(mnemonic, bip39.wordlists.spanish);
    default:
      return 'unsupported';
  }
}
