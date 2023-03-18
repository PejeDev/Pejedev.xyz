import GhostContentAPI, { GhostAPI } from "@tryghost/content-api";

class GhostService {
  private api: GhostAPI;

  constructor() {
    this.api = new GhostContentAPI({
      url: "https://ghost.pejedev.xyz",
      key: "ce061767c5b53105435ac6f474",
      version: "v3",
    });
  }

  async getPosts() {
    return await this.api.posts
      .browse({
        limit: "all",
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async getPost(slug: string) {
    return await this.api.posts
      .read({
        slug,
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async getPage(slug: string) {
    return await this.api.pages
      .read({
        slug,
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default new GhostService();