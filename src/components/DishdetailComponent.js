import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderDish = ({ dish }) => (
  <div className="col-12 col-md-5 m-1">
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  </div>
);

const RenderComments = ({ comments }) => {
  if (comments !== null)
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {comment.date}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  else return <div />;
};

class DishDetail extends Component {
  render = () => {
    const dish = this.props.dish;
    if (dish !== null)
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{this.props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderDish dish={this.props.dish} />
            <RenderComments comments={this.props.comments} />
          </div>
        </div>
      );
    else return <div />;
  };
}

export default DishDetail;
