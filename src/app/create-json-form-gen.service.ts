import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateJsonFormGenService {

  constructor() { }

  createJSONArr(variableArr: string[]) {
    // variableArr = [
    //   'ho_ten',
    //   'khuyen_mai',
    //   'dia_chi'
    //   ]

    let fields = [];
    for (let i = 0; i < variableArr.length; i++) {
      fields.push({
        key: variableArr[i],
        type: 'input',
        templateOptions: {
          label: variableArr[i],
          placeholder: 'Enter ' + variableArr[i],
          required: true,
        }
      });
    }
    // console.log(fields);
    return fields;
  }

  createModel(variableArr: string[]) {
    // variableArr = [
    //   'ho_ten',
    //   'khuyen_mai',
    //   'dia_chi'
    //   ]

    let model = {};
    for (let i = 0; i < variableArr.length; i++) {
      model[variableArr[i]] = '';
    }

    // console.log(model);
    return model;
  }
  findInputNameArr(message: string) {
      let bracketIndexArr = this.findBracketIndex(message, '[', ']');

      let result = [];
      bracketIndexArr.forEach(element => {
        var str = message.slice(element.firstCharIndex + 1, element.secondCharIndex);

        result.push(str);
      });

      // console.log(result);

      return result;
  }

  findBracketIndex(message: string, firstChar: string, secondChar: string) {
    var str = message;
    var indices = [];
    var secondIndices = [];
    for(var i=0; i<str.length;i++) {
        if (str[i] === firstChar) indices.push({firstCharIndex: i});
    }

    for(var j=0; j<str.length;j++) {
      if (str[j] === secondChar) secondIndices.push(j);
    }
    
    for (let z = 0; z < indices.length; z++) {
      indices[z].secondCharIndex = secondIndices[z];
      
    }

    return indices;
  }
}
