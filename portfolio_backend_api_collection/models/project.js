class ProjectModel {
  constructor({
    name,
    description,
    image,
    showCase,
    demoVideo,
    downloadLink,
    projectTechUsed,
    projectType,
  }) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.showCase = showCase;
    this.demoVideo = demoVideo;
    this.downloadLink = downloadLink;
    this.projectTechUsed = projectTechUsed;
    this.projectType = projectType;
  }

  toJSON = () => {
    return {
      name: this.name,
      description: this.description,
      image: this.image,
      showCase: this.showCase,
      demoVideo: this.demoVideo,
      downloadLink: this.downloadLink,
      projectTechUsed: this.projectTechUsed,
      projectType: this.projectType,
    };
  };
}

module.exports = ProjectModel;
