const fs = require('fs');
const {webContents, ipcMain} = require('electron');
const excel = require('node-excel-export');

const styles = function (category) {
  const categoryColorBackground = {rgb: 'FF' + category.colorBackground.substr(1)};
  const categoryColorText = {rgb: 'FF' + category.colorText.substr(1)};
  return {
    default: {
      fill: {
        fgColor: categoryColorBackground
      },
      font: {
        color: categoryColorText,
        sz: 10,
        bold: false
      }
    },
    thingKeyValue: {
      fill: {
        fgColor: categoryColorBackground
      },
      font: {
        color: categoryColorText,
        sz: 10,
        bold: true
      }
    },
    headline: {
      fill: {
        fgColor: categoryColorBackground
      },
      font: {
        color: categoryColorText,
        sz: 10,
        bold: true
      }
    },
    headerInverted: {
      fill: {
        fgColor: categoryColorText
      },
      font: {
        color: categoryColorBackground,
        sz: 10,
        bold: true
      }
    }
  }
};

class FileWriterXlsx {

  constructor(filename) {
    this._filename = filename;
  }

  generateSheet(projectName, category) {

    function findPropertyKeysOfAllThings() {
      const result = [];
      const namesOnly = [];
      let i = category.things.length;
      while (i--) {
        const properties = category.things[i].properties;
        let j = properties.length;
        while (j--) {
          if (namesOnly.indexOf(properties[j].key.name) < 0) {
            result.push(properties[j].key);
            namesOnly.push(properties[j].key.name);
          }
        }
      }
      return result;
    }

    function calcSpecification() {
      const result = {
        s98afh298hsf7892hisdf89i123: {
          displayName: category.propertyKey.name,
          headerStyle: STYLES.headerInverted,
          cellStyle: STYLES.thingKeyValue,
          cellFormat: function (value, row) {
            return value;
          },
          width: 120
        }
      };
      let i = propertyKeys.length;
      while (i--) {
        const propertyKey = propertyKeys[i];
        result[propertyKey.name] = { // TODO calc different properties
          displayName: propertyKey.name,
          headerStyle: STYLES.headerInverted,
          cellStyle: STYLES.default,
          cellFormat: function (value, row) {
            return value;
            /* TODO format property depending on the type*/
          },
          width: 120
        }
      }
      return result;
    }

    function calcValuesOfThing(thing, name) {
      let i = thing.properties.length;
      let result = [];
      while (i--) {
        if (thing.properties[i].key.name === name) {
          result.push(thing.properties[i].value);
        }
      }
      return result;
    }

    function calcDataset() {
      function getSummaryOf(values, type) {
        if(!values.length) return '';
        if (type.startsWith('preselection-')) {
          return 'export not supported yet'; // TODO
        }
        switch (type) {
          case 'range':
            return values[0] + ' %'; // FIXME now it is only one! :(
          case 'euro':
            return values[0] + ' €'; // FIXME now it is only one! :(
          case 'dollar':
            return values[0] + ' $'; // FIXME now it is only one! :(
          case 'checkbox':
            return values[0] ? '+' : '-'; // FIXME now it is only one! :(
          case 'timeperiod':
            return JSON.stringify(values); // TODO
          default:
            return values.join(', ');
        }
      }

      const dataset = [];
      let i = category.things.length;
      while (i--) {
        const thing = category.things[i];
        const result = {s98afh298hsf7892hisdf89i123: thing.keyvalue};
        let j = propertyKeys.length;
        while (j--) {
          const values = calcValuesOfThing(thing, propertyKeys[j].name);
          result[propertyKeys[j].name] = getSummaryOf(values, propertyKeys[j].type);
        }
        dataset.push(result);
      }
      return dataset;
    }

    const STYLES = styles(category);
    const heading = [
      [{value: projectName + ': ' + category.plural, style: STYLES.headline}],
      []
    ];
    const propertyKeys = findPropertyKeysOfAllThings();
    const specification = calcSpecification();
    const dataset = calcDataset();
    const merges = [
      {start: {row: 1, column: 1}, end: {row: 1, column: 10000}}
    ];

    return {
      name: category.plural,
      heading: heading,
      merges: merges,
      specification: specification,
      data: dataset
    };
  }

  createExcelSheets(appData) {

    const projectName = appData.project.name;
    const sheets = [];

    let i = appData.project.categories.length;
    while (i--) {
      sheets.push(this.generateSheet(projectName, appData.project.categories[i]));
    }

    return excel.buildExport(sheets);
  }

  write(appData) {
    fs.writeFile(this._filename, this.createExcelSheets(appData), 'utf8', function (err) {
      if (err) {
        webContents.getAllWebContents().forEach(wc => wc.send('exel-export', {err: err, succ: false}));
        throw err;
      } else {
        webContents.getAllWebContents().forEach(wc => wc.send('exel-export', {succ: true}));
      }
    });
  }
}

module
  .exports = FileWriterXlsx;