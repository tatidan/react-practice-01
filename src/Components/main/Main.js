import React from 'react';
import data from '../../data';
import PhoneList from '../phoneList/PhoneList';
import LaptopList from '../laptopsList/LaptopList';
import Section from '../Section';


const Main = () => {
  return (
    <>
      <Section title="Мобильные телефоны"/>
        <PhoneList phones={data.phones} />

      <Section title="Ноутбуки"/>  
        <LaptopList laptops={data.laptops} />
    </>
  );
};

export default Main;
