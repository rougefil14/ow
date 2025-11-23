import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import PhilosophySection from '../components/PhilosophySection';
import FoundationalSection from '../components/FoundationalSection';
import HowWeOperateSection from '../components/HowWeOperateSection';
import GovernanceSection from '../components/GovernanceSection';
import GlobalImpactSection from '../components/GlobalImpactSection';
import JoinMovementSection from '../components/JoinMovementSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <PhilosophySection />
      <FoundationalSection />
      <HowWeOperateSection />
      <GovernanceSection />
      <GlobalImpactSection />
      <JoinMovementSection />
    </div>
  );
};

export default Home;
