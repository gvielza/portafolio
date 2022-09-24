# sitiocaido
#contact form 7 
.wpcf7 input[type="text"],
.wpcf7 input[type="email"],
.wpcf7 textarea
{
    background-color: #ddd; 
    color: #000;
    width: 100%;
      border: 2px solid grey;
}

.wpcf7
{
    background-color: #f7f7f7;
    border: 2px solid #ddd;
      border-radius: 10px;
      padding: 15px;
      max-width: 50%;
      margin: auto;
}

.wpcf7 input[type="submit"]
{
    background-color: #ddd;
    color: #000;
    width: 100%;
    border: 2px solid grey;
    margin-bottom: -25px;
}


/ Media Queries */

@media screen and (max-width: 770px) {

    .wpcf7 {
     max-width: 60%;
    }
 
 }

@media screen and (max-width: 414px)  {

    .wpcf7 {
     max-width: 100%;
    }
