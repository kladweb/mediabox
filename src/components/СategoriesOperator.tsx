import { Box } from "@mui/material";
import { Params, useParams } from "react-router-dom";
import { appColors } from "../services/appColors";
import { useOutletContext } from "react-router-dom";
import type { ContextCategoriesType } from "../types/typesBox";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";

function CategoriesOperator(): JSX.Element {
  const {categoriesList, channelsList} = useOutletContext<ContextCategoriesType>();
  const params: Readonly<Params<string>> = useParams();
  let operator: string = '';
  if (params.operator) {
    operator = params.operator;
  }
  let accordionList: JSX.Element = <></>;

  console.log(channelsList);

  if (categoriesList !== null) {
    accordionList = categoriesList[operator].map((element: string) => {
      return (
        <Accordion key={element}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls={`${element}-content`}
            id={`${element}-header`}
            sx={{mx: '35%'}}
          >
            {element}
          </AccordionSummary>
          <AccordionDetails>
            {
              !channelsList ?
                null
                :
                channelsList[`${operator}List`].map((channelObj: object, index: number) => {
                  if (channelObj['group' as keyof (typeof channelObj)] === element) {
                    return (
                      <Box
                        key={index}
                        component="img"
                        src={channelObj['src' as keyof (typeof channelObj)]}
                        alt={channelObj['name' as keyof (typeof channelObj)]}
                        sx={{
                          margin: "1rem",
                          width: {xs: '3rem', md: '5rem'},
                          objectFit: "contain",
                          borderRadius: {xs: '3px', md: '5px'},
                        }}
                      />
                    );
                  }
                })
            }
          </AccordionDetails>
        </Accordion>
      );
    });
  }

  return (
    <Box component="div"
         sx={{
           width: '100%',
           textAlign: 'center',
           mb: '3rem'
         }}>
      <Box
        component="img"
        src={`/img/operators/${operator.toLowerCase()}.png`}
        alt={operator}
        sx={{
          margin: "1rem auto",
          width: {xs: '15rem', md: '20rem'},
          objectFit: "contain",
          backgroundColor: appColors.light1,
          borderRadius: {xs: '5px', md: '10px'},
        }}
      />
      {accordionList}
    </Box>
  )
}

export default CategoriesOperator;
