class CertificateModel {
  constructor({ certificateName, certificatelink }) {
    this.name = certificateName;
    this.image = certificatelink;
  }

  toJSON() {
    return {
      name: this.name,
      image: this.image,
    };
  }
}

module.exports = CertificateModel;
