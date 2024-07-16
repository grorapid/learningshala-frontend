import ImageCardSilder from "../common/components/Cards/ImageCardList";
import DemandedFreeCourses from "../common/components/DemandingCoursesSlider";
import DisclosureFAQ from "../common/components/Disclosure";
import SkollegeSpotlight from "../common/components/SkollegeSpotlight";
import Slider from "../common/components/Slider";
import Stats from "../common/components/Stats";
import TalkToExperts from "../common/components/TalkToExpert";
import TextTestimonials from "../common/components/TextTestimonials";
import VideoTestimonials from "../common/components/VideoTestimonial";
import TopCollections from "../common/sections/HomePage/TopCollections";
import BannerScolarship from "../common/sections/University/BannerScholarship";

// ADD MCE EDITOR
export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "atoms.slider123":
     return <Slider home={true} key={`atoms.slider123-${index}`} data={section} />;
    case "atoms.image-slider":
      return <ImageCardSilder key={`atoms.image-slider-${index}`} data={section} />;
    case "atoms.whycard":
      return <SkollegeSpotlight key={`atoms.whycard-${index}`} data={section} />;
    case "mol.faq-section":
      return <DisclosureFAQ key={`mol.faq-section-${index}`} data={section} />;
    case "atoms.banner":
      return (
        <div key={`atoms.banner-${index}`} className="md:container mx-auto my-12 md:my-16">
          <BannerScolarship />
        </div>
      );
    case "mol.testimonial-cards-text-section":
      return <VideoTestimonials key={`mol.testimonial-cards-text-section-${index}`} data={section} />;
    case "mol.top-learning-program-section":
      return <TopCollections key={`mol.top-learning-program-section-${index}`} data={section} />;
    case "mol.stats":
      return <Stats key={`mol.stats-${index}`} data={section} />;
    case "mol.demanded-courses-section":
      return <TalkToExperts key={`mol.demanded-courses-section-${index}`} data={section} />;
    case "mol.testimonial-text-card":
      return <TextTestimonials key={`"mol.testimonial-text-card-${index}`} show={true} data={section} />;
    case "mol.demanding-courses-section":
      return <DemandedFreeCourses key={index} homepage={true} data={section} />;
    default:
      return null;
  }
}
