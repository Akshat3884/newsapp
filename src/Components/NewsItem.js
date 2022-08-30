import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://bitsofco.de/content/images/2018/12/broken-1.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">Source : <em><big>{source}</big></em></p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown" } on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-secondary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
