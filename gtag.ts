declare global {
  interface Window {
    gtag: (key: string, ...params: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const pageview = (url: string) => {
  if (window !== undefined) {
    window?.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: any) => {
  if (window !== undefined) {
    window?.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
