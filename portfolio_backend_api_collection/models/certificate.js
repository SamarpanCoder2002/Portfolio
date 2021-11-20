class CertificateModel {
  constructor({ name, image }) {
    this.certificateName = name;
    this.certificateImage = image;
  }

  toJSON() {
    return {
      name: this.certificateName,
      image: this.certificateImage,
    };
  }
}

module.exports = CertificateModel;
