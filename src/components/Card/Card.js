import Button from '../Button/Button.js';

export default function Card() {
  return (
    <Section>
      <h2>Meine Karte</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facilis at, pariatur debitis ab eligendi
        nesciunt tempora quidem animi corrupti voluptatibus laborum doloribus autem et aliquam. Sapiente nemo, incidunt
        corrupti ratione sequi, error doloribus accusantium accusamus iusto animi officia hic distinctio commodi
        mollitia, repudiandae architecto aliquid totam sunt quam omnis.
      </p>
      <Button />
    </Section>
  );
}

const Section = styled.section`
  background-color: teal;
  color: #fff;
  padding: 25px;
  border-radius: 15px;
  margin: 15px 0;
`;
