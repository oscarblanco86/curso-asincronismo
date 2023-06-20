export function delay(time, message) {
    return new Promise((resolve, reject) => {
      if (time >= 0) {
        window.setTimeout(() => {
          resolve(message)
        }, time);
      } else {
        reject('ingrese una cantidad de tiempo mayor a cero');
      }
    })
    // Tu código aquí 👈
  }
  