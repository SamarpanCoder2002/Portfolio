class ProjectModel {
  constructor({
    projectName,
    projectDescription,
    projectImage,
    projectShowCase,
    projectDemoVideo,
    projectDownloadLink,
    projectTechUsed,
    projectType,
    projectGithubLink,
  }) {
    this.name = projectName;
    this.description = projectDescription;
    this.image = projectImage;
    this.showCase = projectShowCase;
    this.demoVideo = projectDemoVideo;
    this.downloadLink = projectDownloadLink;
    this.projectTechUsed = projectTechUsed;
    this.projectType = projectType;
    this.projectGithubLink = projectGithubLink;
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
      projectGithubLink: this.projectGithubLink,
      projectId: Date.now(),
    };
  };
}

module.exports = ProjectModel;
