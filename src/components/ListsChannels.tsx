import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { appColors } from "../services/appColors";
import { Box } from "@mui/material";
import type { ITranslate } from "../types/typesBox";
import { useTranslation } from "react-i18next";
import { operators } from "../data/dataIPTV";
import ListChannels from "./ListChannels";

function ListsChannels(): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const [activeCard, setActiveCard] = useState<string>('');
  const [categoriesList, setCategoriesList] = useState<object | null>(null);
  const [channelsList, setChannelsList] = useState<object | null>(null);
  const [isListLoaded, setIsListLoaded] = useState<boolean>(false);

  const changeCard = (nameCard: string) => {
    setActiveCard(nameCard);
  }

  useEffect(() => {
    fetch('/listObj.json')
      .then((response) => response.json())
      .then((data) => {
        setChannelsList(data);
        setIsListLoaded(true);
        const listCategoriesOperator = [];
        const catList: any = {};
        for (let key in data) {
          const keyShort = key.replace('List', '');
          catList[keyShort] = [];
          data[key].forEach((elem: any, index: number) => {
            if (!catList[keyShort].includes(data[key][index]['group'])) {
              catList[keyShort].push(data[key][index]['group']);
            }
          })
        }
        setCategoriesList(catList);
      });
  }, []);

  // {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  // }

  return (
    <>
      <Box
        component='h3'
        sx={{
          m: {xs: '3.5em auto 0.5em', md: '3em auto 0.5em'},
          width: '100%',
          fontSize: {xs: '1.25rem', md: '1.75rem'},
          fontWeight: '400',
          color: appColors.mid2,
          textAlign: 'center',
        }}
      >
        {t('headOperator')}
      </Box>
      <Box component='div' sx={{
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      >
        {
          Object.keys(operators).map((operator: string, i: number) =>
            <ListChannels
              key={i}
              operator={operator}
              aktiveCard={activeCard}
              changeCard={changeCard}
            />
          )
        }
      </Box>
      <Outlet context={{categoriesList, channelsList, isListLoaded}}/>
    </>
  )
}

export default ListsChannels;