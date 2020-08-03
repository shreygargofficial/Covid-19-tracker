import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
function CardMade({ tag, total,today }) {


    return (

        <Card className="cardHandMade">
            <CardContent>
                    <div className="title">
                    {tag}
                    </div>
                
                
                    <div className={tag!=="Recovered"?"red title numbers":"green title numbers" }>
                    +{convert(today)}
                    </div>

                    <div className="title total">
                    Total {convert(total)}
                    </div>
               
            </CardContent>

        </Card>
    
    )
}



function convert(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9
  
    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6
  
    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3
  
    ? (Math.abs(Number(labelValue)) / 1.0e+3 ).toFixed(2)+ "K"
  
    : Math.abs(Number(labelValue));
  
  }

export default CardMade;