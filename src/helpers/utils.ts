import { EsperoDB } from "esperodb";

// export const generateFileUrl = (file: any) => {
//     if (!file) {
//         console.error("Le fichier est manquant.");
//         return null;
//     }

//     try {
//         const fileUrl = URL.createObjectURL(file);
//         return fileUrl;
//     } catch (error) {
//         console.error("Erreur lors de la création de l'URL du fichier :", error);
//         return null;
//     }
// }

export const generateFileUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();

    reader.onload = function (evt) {
      resolve(evt.target?.result as string);
    };

    reader.onerror = function (evt) {
      reject(new Error("Error reading the file."));
    };

    reader.readAsDataURL(file);
  });
};

export const convertFileToBlob = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (evt) {
      if (evt.target?.result instanceof ArrayBuffer) {
        const blob = new Blob([evt.target.result], { type: file.type });
        resolve(blob);
      } else {
        reject(new Error("Error converting file to Blob."));
      }
    };

    reader.onerror = function () {
      reject(new Error("Error reading the file."));
    };

    reader.readAsArrayBuffer(file);
  });
};
  
// export const convertFileToBlob = (file: File): Promise<Blob> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();

//     reader.onload = function (evt) {
//       if (evt.target && evt.target.result instanceof ArrayBuffer) {
//         const blob = new Blob([evt.target.result], { type: file.type });
//         resolve(blob);
//       } else {
//         reject(new Error("Erreur lors de la conversion du fichier en Blob."));
//       }
//     };

//     reader.onerror = function () {
//       reject(new Error("Erreur lors de la lecture du fichier."));
//     };

//     reader.readAsArrayBuffer(file);
//   });
// };

  // export const convertBlobToUrl = (blob: Blob): string => {
  //     return window.URL.createObjectURL(blob);
  //   };



  export const convertBlobToUrl = (blob: Blob): string | null => {
    // Vérifie si Blob est valide
    if (!(blob instanceof Blob)) {
      console.error("Le paramètre passé à convertBlobToUrl n'est pas un objet Blob valide.");
      return null;
    }
  
    // Vérifie si createObjectURL est pris en charge dans l'environnement
    if (!window.URL || !window.URL.createObjectURL) {
      console.error("La méthode createObjectURL n'est pas prise en charge dans cet environnement.");
      return null;
    }
  
    // Convertit Blob en URL
    try {
      return window.URL.createObjectURL(blob);
    } catch (error) {
      console.error("Erreur lors de la création de l'URL à partir du Blob:", error);
      return null;
    }
  };
  
  

















