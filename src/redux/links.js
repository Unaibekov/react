import htmlBg from '../assets/images/htmlBg.jpg';
import cssBg from '../assets/images/cssBg.jpg';
import reactBg from '../assets/images/reactBg.png';
import javaBg from '../assets/images/javaBg.png';

export default () => {
  return [
    {
      id: 1,
      title: 'HTML',
      path: 'htmlless',
      image: htmlBg
    },
    {
      id: 2,
      title: 'CSS',
      path: 'cssless',
      image: cssBg
    },
    {
      id: 3,
      title: 'JavaScript',
      path: 'javaless',
      image: javaBg
    },
    {
      id: 4,
      title: 'React',
      path: 'reactless',
      image: reactBg
    }
  ]
}
