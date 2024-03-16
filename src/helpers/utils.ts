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
