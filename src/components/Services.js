import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state={
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet, nonumes dissentiet per at.'
      },
      {
        icon: <FaHiking />,
        title: 'hiking trails',
        info: 'Lorem ipsum dolor sit amet, nonumes dissentiet per at.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'shuttle vans',
        info: 'Lorem ipsum dolor sit amet, nonumes dissentiet per at.'
      },
      {
        icon: <FaBeer />,
        title: 'brewerys',
        info: 'Lorem ipsum dolor sit amet, nonumes dissentiet per at.'
      },
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            })}
          </div>
      </section>
    )
  };
};