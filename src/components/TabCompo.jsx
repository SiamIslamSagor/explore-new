import { Tab, Tabs } from "@nextui-org/react";

const TabCompo = () => {
  const variants = ["solid", "underlined", "bordered", "light"];

  return (
    <div className="flex flex-wrap gap-4">
      {variants.map(variant => (
        <Tabs key={variant} variant={variant} aria-label="Tabs variants">
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </div>
  );
};

export default TabCompo;
