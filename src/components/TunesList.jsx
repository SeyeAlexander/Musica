import { VStack } from '@chakra-ui/react';
import TuneItem from './TuneItem';
import one from '../assets/two.png';
import two from '../assets/Rectangle 25-1.png';
import three from '../assets/Rectangle 25-2.png';
import four from '../assets/Rectangle 25-3.png';
import five from '../assets/Rec.png';

const TunesList = () => {
  return (
    <VStack ml="100px" w="1150px" spacing="10px">
      <TuneItem
        img={one}
        title={'Let me love you ~ Kris'}
        type={'Single'}
        time={'4:17'}
      />
      <TuneItem
        img={two}
        title={'Wetin man go do ~ Burna'}
        type={'African giant'}
        time={'2:30'}
      />
      <TuneItem
        img={three}
        title={'Stand strong ~ Davido'}
        type={'Single'}
        time={'2:02'}
      />
      <TuneItem
        img={four}
        title={'Peru ~ Fireboy'}
        type={'Single'}
        time={'3:17'}
      />
      <TuneItem
        img={five}
        title={'Calm down ~ Rema'}
        type={'Single'}
        time={'2:14'}
      />
      <TuneItem
        img={one}
        title={'Let me love you ~ Kris'}
        type={'Single'}
        time={'4:17'}
      />
      <TuneItem
        img={two}
        title={'Wetin man go do ~ Burna'}
        type={'African giant'}
        time={'2:30'}
      />
      <TuneItem
        img={three}
        title={'Stand strong ~ Davido'}
        type={'Single'}
        time={'2:02'}
      />
      <TuneItem
        img={four}
        title={'Peru ~ Fireboy'}
        type={'Single'}
        time={'3:17'}
      />
      <TuneItem
        img={five}
        title={'Calm down ~ Rema'}
        type={'Single'}
        time={'2:14'}
      />
    </VStack>
  );
};

export default TunesList;
