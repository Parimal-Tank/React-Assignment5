import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import { CardActions, CardContent, CardMedia, Pagination, Rating, Typography } from "@mui/material";
import ProductsDetails from "../../components/ProductsDetails";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [productData, setProductData] = useState([]);

  // const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit , setLimit ] = useState(1);
  const [skip , setSkip] = useState(8);

  const loadData = async () => {
    const result = await axios(`https://dummyjson.com/products?skip=${skip*limit}`);
    setProductData(result.data.products);
  };

  useEffect(() => {
    loadData();
  }, [limit]);

  return (
    <div className="m-5">
      <div className="text-center my-5">
        <h2>VIEW YOUR FAVORITE PRODUCTS</h2>
      </div>
      <Row className="justify-content-center">
        {productData.map((result, index) => {
          return (
            <Col sm="6" lg="3">

              <Card sx={{ maxWidth: 345 }} className="mb-3">
                <CardMedia
                  sx={{ height: 310 }}
                  image={result.thumbnail}
                  title={result.title}
                  className="img-fluid object-fit-none"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="product-title"
                  >
                    Title : {result.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category : {result.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Brand Name : {result.brand}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary"> */}
                    <Typography className="d-flex">Rating : <Rating name="read-only" value={result.rating} readOnly /></Typography>
                  {/* </Typography> */}
                  <Typography variant="body2" color="text.secondary">
                    Price : {result.price}$
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Discount : {result.discountPercentage}%
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="product-description"
                  >
                    Description : {result.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className="text-white mx-2"
                    variant="contained"
                    style={{
                      backgroundColor: "#57c5b6",
                      borderColor: "#57c5b6",
                    }}
                    outline
                  >
                    <Link
                      to="/dashboard/viewproduct"
                      state={{ productId: result.id }}
                      className="text-decoration-none text-white"
                    >
                      Show Product
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Pagination display="flex" justifyContent="center" count={10} showFirstButton={true} showLastButton={true} onChange={(e, value) => setPage(value)} />
    </div>
  );
};

export default Products;
