import { createCard, deleteCard } from '../components/card.js';
import '../pages/index.css';
import initialCards from './cards.js';

const listElement = document.querySelector('.places__list');

initialCards.forEach((cardData) => listElement.append(createCard({ cardData, deleteCard })));
