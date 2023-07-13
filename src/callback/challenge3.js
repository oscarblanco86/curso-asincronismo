export async function runCode(url) {
    async function dataReturn(urlApi) {
      const response = await fetch(urlApi);
      const data = await response.json();
      return data;
    }
  
    try {
      //console.logdataReturn(url);
      let jsonData = await dataReturn(url);
      console.log(jsonData);
      return jsonData
    } catch (error) {
      throw new Error('Invalid URL');
      //throw new Error('Something was wrong');
    }
  }
///Estuve cerca pero el error handling del URL lo desconcia


export async function runCode(url) {
    try { // validar formato correcto url
      new URL(url);
    } catch (e) {
      throw new Error('Invalid URL');
    }
    try { // validar que exista url
      const response = await fetch(url)
      return response.json();   
    } catch (e) {
      throw new Error('Something was wrong');
    }
  }




  // correciones 


  export async function runCode(url) {
      try {
        new URL(url);
      } catch (error) {
        throw new Error('Invalid URL');
      }
    try {
      const jsonData = await fetch(url);
      return jsonData.json();
    } catch (error) {
      throw new Error('Something was wrong');
    }
  }