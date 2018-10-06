// to generate a new key: require('crypto').randomBytes(3*4).toString('base64')
const TEXTS = {
  'VlsFXjPultjFOija': {
    en: 'Define your first thing here',
    de: 'Definiere Deine erste Sache'
  },
  'sUfmYEPPdBBRL5Z3': {
    en: 'What is your mission?',
    de: 'Was möchtest Du verwalten?'
  },
  'aSTys64BadnhDxG5': {
    en: 'Project Name',
    de: 'Name des Projekts'
  },
  'qml1h1qAhTdFbrAu': {
    en: 'e.g. My Library',
    de: 'Z.B. Meine Bücher'
  },
  'FqFezyc1oSu944aU': {
    en: 'What kind of thing is your first?',
    de: 'Welche Art von Sache möchtest Du verwalten?'
  },
  'aKaexK0ACUBUqi5o': {
    en: 'Singular Term',
    de: 'Einzahl'
  },
  'DlYP16VWFMcl5Oo6': {
    en: 'e.g. Book',
    de: 'Z.B. Buch'
  },
  'dSWlfcUauVIvYO3B': {
    en: 'e.g. Books',
    de: 'Z.B. Bücher'
  },
  'UmfQ8szYOce8l3jR': {
    en: 'Plural Term',
    de: 'Mehrzahl'
  },
  'iaKt20y27Q1DDaQu': {
    en: 'What is the most important attribute of your {1}?',
    de: 'Was ist die wichtigste Eigenschaft Deiner {1}?'
  },
  'v4wZlj52pVH+sqqT': {
    en: 'things',
    de: 'Sachen'
  },
  '2BsZT2KP5Jr4Y7LS': {
    en: 'attribute',
    de: 'Eigenschaft'
  },
  '5ukUrFBsPqun4Dtc': {
    en: 'thing',
    de: 'Sache'
  },
  'SjHPZn9s83cjI2OL': {
    en: 'Your Project',
    de: 'Dein Projekt'
  },
  'rXYPadAB5YgYyLpB': {
    en: 'Attribute',
    de: 'Eigenschaft'
  },
  '37B1orLeGG53soUH': {
    en: 'e.g. Title',
    de: 'Z.B. Titel'
  },
  'yftlu43NdMw4Gfaa': {
    en: 'e.g. Shining',
    de: 'Z.B. Ich bin dann mal weg'
  },
  '6ycMQqLU3Kb6T69M': {
    en: 'What colors should be cards of {1} in?',
    de: 'Welche Farben sollen Karteikarten von {1} haben?'
  },
  'JOpIzKg0cdGyXgVG': {
    en: 'Please define your very first {1}',
    de: 'Definiere Deine allererste Sache'
  },
  'vp5aqq4LTfwQ2CkQ': {
    en: '{1} of the {2}',
    de: '{1}'
  },
  'SKEFwKi4GfqyOyT5': {
    en: 'Background-Color',
    de: 'Hintergrundfarbe'
  },
  'GARs4FY1svvEI3Od': {
    en: 'Text-Color',
    de: 'Textfarbe'
  },
  'sj5BzmGMC30e1aKl': {
    en: 'Start Manage',
    de: 'Verwaltung starten'
  },
  'VaHcMxbCcjn8016t': {
    en: 'Start!',
    de: 'Start!'
  },
  'K2obBudGwnCRDvIp': {
    en: 'Welcome to the Things Manager',
    de: 'Willkommen beim Things Manager'
  },
  'iSrgYfncQe6SQwEV': {
    en: 'Before you are able to start managing things, you have to define some basics and your very first thing.',
    de: 'Bevor Du anfangen kannst, Sachen zu verwalten, musst Du definieren, was Du verwalten möchtest und Du darfst Deine allererste Sache erfassen.'
  },
  'PjEbHaH4YWEJUFTH': {
    en: '',
    de: ''
  },
  'VbbqP6v1yHoWqABp': {
    en: '',
    de: ''
  },
  'wta6G6dhKTpcPVFD': {
    en: '',
    de: ''
  },
  'DNzYLhgMFuXzPse7': {
    en: '',
    de: ''
  },
  'S86h5u1O+rUoneOt': {
    en: '',
    de: ''
  },
  'MAa9a19b+hiF0hUA': {
    en: '',
    de: ''
  },
  'qYv6GRxsa3Kns+Mu': {
    en: '',
    de: ''
  },
  'cwvs+xA9BSZNuL08': {
    en: '',
    de: ''
  },
  'LC5mU7k6ha4ktcLT': {
    en: '',
    de: ''
  },
  'WxykMLwBTKWHuTIj': {
    en: '',
    de: ''
  },
  'CCXaoC1JKRXNcgXH': {
    en: '',
    de: ''
  },
  '6aROasnal7tNQsPt': {
    en: '',
    de: ''
  },
  'iZ4+8dJ2jBTbd7Ja': {
    en: '',
    de: ''
  },
  'aSawO4UuPSIxZpQK': {
    en: '',
    de: ''
  },
  '5IwOpns5w1FNb4xj': {
    en: '',
    de: ''
  },
  'iKdUF7OMQAQHT9aj': {
    en: '',
    de: ''
  },
  'AGneRYhafefZdMZc': {
    en: '',
    de: ''
  },
  'Xt7O6buuEhoCNUE1': {
    en: '',
    de: ''
  },
  '6RSrfDDH2dz5iOEf': {
    en: '',
    de: ''
  },
  'KbunXNar7QTA1nZb': {
    en: '',
    de: ''
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