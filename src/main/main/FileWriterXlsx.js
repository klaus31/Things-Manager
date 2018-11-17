const fs = require('fs');
// TODO const {webContents, ipcMain} = require('electron');
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

    const STYLES = styles(category);

    const heading = [
      [{value: projectName + ': ' + category.plural, style: STYLES.headline}],
      []
    ];


    const specification = {
      col1: {
        displayName: category.propertyKey.name,
        headerStyle: STYLES.headerInverted,
        cellStyle: STYLES.thingKeyValue,
        cellFormat: function (value, row) {
          return value;
        },
        width: 120
      },
      col2: { // TODO calc different properties
        displayName: category.propertyKey.name,
        headerStyle: STYLES.headerInverted,
        cellStyle: STYLES.default,
        cellFormat: function (value, row) {
          return value; // TODO format propert type
        },
        width: 120
      }
    };

    let i = 0;
    const dataset = [];
    while (i < category.things.length) {
      const thing = category.things[i];
      dataset.push({col1: thing.keyvalue, thing: thing}); // TODO fill with all properties
      i++;
    }

    const colsOfHeadline = 3; // TODO calc from length of different properties
    const merges = [
      {start: {row: 1, column: 1}, end: {row: 1, column: colsOfHeadline}}
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

  write(appData, callback) {
    fs.writeFile(this._filename, this.createExcelSheets(appData), 'utf8', function (err) {
      console.error(err); // TODO
      callback();
      // if (err) {
      //   webContents.getAllWebContents().forEach(wc => wc.send('exel-export', {err: err, succ: false}));
      //   throw err;
      // } else {
      //   webContents.getAllWebContents().forEach(wc => wc.send('exel-export', {succ: true}));
      // }
    });
  }
}

module.exports = FileWriterXlsx;