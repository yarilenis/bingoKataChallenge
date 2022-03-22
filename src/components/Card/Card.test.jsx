// import { mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const dataCard = {
  matches: 0,
  total: 24,
  winner: false,
  rows: {
    B: [
      { state: false, value: 5 },
      { state: false, value: 2 },
      { state: false, value: 7 },
      { state: false, value: 11 },
      { state: false, value: 10 },
    ],
    I: [
      { state: false, value: 24 },
      { state: false, value: 18 },
      { state: false, value: 25 },
      { state: false, value: 19 },
      { state: false, value: 26 },
    ],
    N: [
      { state: false, value: 32 },
      { state: false, value: 34 },
      { state: false, value: '' },
      { state: false, value: 31 },
      { state: false, value: 35 },
    ],
    G: [
      { state: false, value: 52 },
      { state: false, value: 46 },
      { state: false, value: 49 },
      { state: false, value: 53 },
      { state: false, value: 57 },
    ],
    O: [
      { state: false, value: 68 },
      { state: false, value: 66 },
      { state: false, value: 65 },
      { state: false, value: 72 },
      { state: false, value: 62 },
    ],
  },
};

test('Render Card', () => {
  render(<Card card={dataCard} index="1" />);
  const linkElement = screen.getByText('Cartilla 1');
  expect(linkElement).toBeInTheDocument();
});

// describe('Render Card', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<Card card={dataCard} index="1" />);
//     enzymeWrapper = mount(<Card card={dataCard} index="1" />);
//   });

//   it('Verify instance Card', () => {
//     const instance = wrapper.instance();
//     expect(instance).not.toBe(null);
//   });

//   it('Verify print 5 Rows', () => {
//     const list = enzymeWrapper.find('.boxRows').children();
//     expect(list.length).toEqual(5);
//   });
// });
