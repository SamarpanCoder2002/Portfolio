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
      projectName: this.name,
      projectDescription: this.description,
      projectImage: this.image,
      projectShowCase: this.showCase,
      projectDemoVideo: this.demoVideo,
      projectDownloadLink: this.downloadLink,
      projectTechUsed: this.projectTechUsed,
      projectType: this.projectType,
      projectId: Date.now(),
    };
  };
}

module.exports = ProjectModel;
