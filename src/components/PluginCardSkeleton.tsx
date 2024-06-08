const ProfileCardSkeleton = () => (
  <div className="w-full h-full p-6 bg-white rounded-lg shadow relative z-10 overflow-hidden inline-block">
    <div className="flex justify-between mb-2">
      <div>
        <div className="h-6 w-32 bg-primary-default/10 rounded mb-2"></div>
        <div className="h-4 w-24 bg-primary-default/10 rounded"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-6 w-16 bg-primary-default/10 rounded"></div>
      </div>
    </div>
    <div className="h-4 w-full bg-primary-default/10 rounded mb-6"></div>
    <div className="flex flex-wrap gap-2 mb-6">
      <div className="h-6 w-16 bg-primary-default/10 rounded-full"></div>
      <div className="h-6 w-16 bg-primary-default/10 rounded-full"></div>
      <div className="h-6 w-16 bg-primary-default/10 rounded-full"></div>
    </div>
    <hr className="my-6 bg-gray-default border-none h-0.5" />
    <div className="flex justify-center md:justify-between items-center flex-wrap gap-4 md:gap-0">
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 bg-primary-default/10 rounded-full"></div>
        <div className="w-6 h-6 bg-primary-default/10 rounded-full"></div>
        <div className="w-6 h-6 bg-primary-default/10 rounded-full"></div>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        <div className="flex flex-col items-center">
          <div className="h-6 w-32 bg-primary-default/10 rounded-bl rounded-tl"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-6 w-32 bg-primary-default/10 rounded-bl rounded-tl"></div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCardSkeleton;
