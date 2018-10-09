// to generate a new key: require('crypto').randomBytes(3*4).toString('base64')
const TEXTS_MANAGE_THINGS = {
  'PjEbHaH4YWEJUFTH': {
    en: 'Manage Things',
    de: 'Verwalte Sachen'
  },
  'VbbqP6v1yHoWqABp': {
    en: 'Show details',
    de: 'Mehr Details'
  },
  'wta6G6dhKTpcPVFD': {
    en: 'Hide details',
    de: 'Weniger Details'
  },
  'DNzYLhgMFuXzPse7': {
    en: 'Add Thing',
    de: 'Füge eine Sache hinzu'
  },
  'S86h5u1OcrUoneOt': {
    en: 'Add {1}',
    de: '{1} hinzufügen'
  },
  'MAa9a19b+hiF0hUA': {
    en: 'Do Show',
    de: 'Anzeigen'
  },
  'qYv6GRxsa3Kns+Mu': {
    en: 'Add New Property',
    de: 'Füge neue Eigenschaft hinzu'
  },
  'cwvs+xA9BSZNuL08': {
    en: 'Add missing Properties from all other {1}',
    de: 'Füge alle hier nicht aufgeführten Eigenschaften aller anderen {1} hinzu'
  },
  'LC5mU7k6ha4ktcLT': {
    en: 'Change this to {1}',
    de: 'Ändere das hier zu {1}'
  },
  'WxykMLwBTKWHuTIj': {
    en: 'Clone this thing',
    de: 'Dupliziere diese Sache'
  },
  'CCXaoC1JKRXNcgXH': {
    en: 'Delete this thing',
    de: 'Lösche diese Sache'
  },
  '6aROasnal7tNQsPt': {
    en: 'Modify this thing',
    de: 'Bearbeite diese Sache'
  },
  'iZ4l8dJ2jBTbd7Ja': {
    en: 'Stop modifying this thing',
    de: 'Bearbeitung fertig'
  },
  'aSawO4UuPSIxZpQK': {
    en: 'Clone this Property',
    de: 'Dupliziere diese Eigenschaft'
  },
  '5IwOpns5w1FNb4xj': {
    en: 'Delete this Property',
    de: 'Lösche diese Eigenschaft'
  },
  'iKdUF7OMQAQHT9aj': {
    en: 'Search in {1} things',
    de: 'Suche in {1} Sachen'
  },
  'AGneRYhafefZdMZc': {
    en: 'Options',
    de: 'Optionen'
  },
  'Xt7O6buuEhoCNUE1': {
    en: 'Sort by Key-Attribute (A-Z)',
    de: 'Sortierung: Schlüssel Eigenschaft (A-Z)'
  },
  '6RSrfDDH2dz5iOEf': {
    en: 'Sort by Key-Attribute (Z-A)',
    de: 'Sortierung: Schlüssel Eigenschaft (Z-A)'
  },
  'KbunXNar7QTA1nZb': {
    en: 'Manage Categories',
    de: 'Kategorien verwalten'
  },
  '0aYq0NzDK5QDGRHU': {
    en: '',
    de: ''
  },
  '66E0cBeAE36DjwdR': {
    en: '',
    de: ''
  },
  'MWQya74mjL1TiVxr': {
    en: '',
    de: ''
  },
  'TM7x2sIa1+GqfUzB': {
    en: '',
    de: ''
  },
  '+F+FBgVj9SAnz+L0': {
    en: '',
    de: ''
  },
  'JKF90coX32wR+Z27': {
    en: '',
    de: ''
  },
  'Ar8tb08ZLSKLBgiO': {
    en: '',
    de: ''
  },
  '1rICfffB0RJ9MCZF': {
    en: '',
    de: ''
  },
  'hbXNOs1a8XLfpPUG': {
    en: '',
    de: ''
  },
  'PGo4jzPQhhjFytVb': {
    en: '',
    de: ''
  },
  'ffVmaz6ioakG2Yig': {
    en: '',
    de: ''
  },
  '+i+Dmmd0sE+w4wHP': {
    en: '',
    de: ''
  },
  'dmGbP8RxxuvY67gp': {
    en: '',
    de: ''
  },
  'VRcxAey1gJd0oXtx': {
    en: '',
    de: ''
  },
  'lmKSi4vmTIY59ZL5': {
    en: '',
    de: ''
  },
  '4skhemrOUhhd+Hrf': {
    en: '',
    de: ''
  },
  'aLza5sAT7uBUca6y': {
    en: '',
    de: ''
  },
  'kkxNOEZgvAbRcU6R': {
    en: '',
    de: ''
  },
  'yWYzCXzX5q4i6ozR': {
    en: '',
    de: ''
  },
  'P2aynTUEcukdI7HG': {
    en: '',
    de: ''
  },
  'd7o1CfJxQdMD1J1D': {
    en: '',
    de: ''
  },
  '8R+yw4ga3k8l2Jmz': {
    en: '',
    de: ''
  },
  'uVhRGOARoVePkGaD': {
    en: '',
    de: ''
  },
  'pZGqCCs4wkV8oIUD': {
    en: '',
    de: ''
  },
  'BcBMcbH7IoAdZkM8': {
    en: '',
    de: ''
  },
  'P6kUEsaGYaf3bPGk': {
    en: '',
    de: ''
  },
  'bKBlLhc8BoGOryrB': {
    en: '',
    de: ''
  },
  'O+eWk0AWz168b6Ti': {
    en: '',
    de: ''
  },
  'NHnNEtnlrvL4wDTL': {
    en: '',
    de: ''
  },
  'A+orb9d17VbVvQav': {
    en: '',
    de: ''
  },
  'FubBHQlDYzybys12': {
    en: '',
    de: ''
  },
  'n0ToxaH67mK2enUl': {
    en: '',
    de: ''
  },
  'daC5sysxzFZAtYg4': {
    en: '',
    de: ''
  },
  'OsTJTWJ+74NqgztE': {
    en: '',
    de: ''
  },
  'Fd2XGPxypfDO3WkB': {
    en: '',
    de: ''
  },
  'VgIH1bB7SisOWvjB': {
    en: '',
    de: ''
  },
  'rhjVfeYazTb7awVd': {
    en: '',
    de: ''
  },
  'jXHr3ZMOXy00Ftis': {
    en: '',
    de: ''
  },
  'DjqDlVwdpnmh+HFz': {
    en: '',
    de: ''
  },
  'kWSwrTLPcQ4jE5R9': {
    en: '',
    de: ''
  },
  'Fh2alsNGRB1gvb12': {
    en: '',
    de: ''
  },
  '2YNE6Toq67yjaClS': {
    en: '',
    de: ''
  },
  'cRJEa52izDuqTuVf': {
    en: '',
    de: ''
  },
  'DTANaGQTQs55RXVa': {
    en: '',
    de: ''
  },
  '1falfP5Ud7kcsJkf': {
    en: '',
    de: ''
  },
  'aiGu1EPcX1lWSWLc': {
    en: '',
    de: ''
  },
  'qESMYmW3dfY4Zsjw': {
    en: '',
    de: ''
  },
  'iimzp7FEAW9ZoLtx': {
    en: '',
    de: ''
  },
  'pwVAqp9l1Dyoj8X1': {
    en: '',
    de: ''
  },
  '+NdA8kHIqyHWLIbC': {
    en: '',
    de: ''
  },
  'nDY3mqHi3LLmRxO2': {
    en: '',
    de: ''
  },
  'MtDn7KRzVPfMT3yh': {
    en: '',
    de: ''
  },
  'k+4iI26SSGviZ0bQ': {
    en: '',
    de: ''
  },
  '39Q0ToBUjIQOTdCj': {
    en: '',
    de: ''
  }
};