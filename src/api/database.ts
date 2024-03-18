import { EsperoDB } from "esperodb";

const dataStructure = [
  {
    videos: [
        { 
            indexes: [ { category: { unique: true } } ], 
            primaryKey: "_id", 
        }
    ],
  }
];

export const db = new EsperoDB('ouitube', dataStructure, 1);
