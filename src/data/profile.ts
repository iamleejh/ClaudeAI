export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// 프로필과 링크는 여기서 수정하세요. id는 클릭 수 집계의 키로 쓰이므로 바꾸지 않는 것이 좋습니다.
export const profile: Profile = {
  name: "이정훈",
  bio: "세계 최강 시각화 전략가",
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/iamleejh69" },
    { id: "blog", title: "블로그", url: "https://example.com" },
  ],
};
