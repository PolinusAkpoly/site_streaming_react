import { EsperoDB } from "esperodb";

export const generateFileUrl = (file: any) => {
    if (!file) {
        console.error("Le fichier est manquant.");
        return null;
    }

    try {
        const fileUrl = URL.createObjectURL(file);
        return fileUrl;
    } catch (error) {
        console.error("Erreur lors de la création de l'URL du fichier :", error);
        return null;
    }
}

export const indexdb = (dbVersion: number = 1) =>{

    const dataStructure: any = [
        {
          'table1': [
            { indexes: [{ 'index1': { unique: false } }], primaryKey: 'id' },
          ],
        },
        // {
        //   'table2': [
        //     // Table structure without indexes
        //   ],
        // },
      ];
       
      // Create an instance of the local database
      const db = new EsperoDB('streamingDB', dataStructure, dbVersion);

          return db

}

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
  
  export const convertBlobToUrl = (blob: Blob): string => {
      return window.URL.createObjectURL(blob);
    };
  

















