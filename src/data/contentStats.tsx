import React from 'react';
import { ContentStat } from '../types';
import { Youtube } from 'lucide-react';
import { TiktokIcon } from '../components/ui/CustomIcons';

// Content stats for the Sponsorship page
export const contentStats: ContentStat[] = [
  {
    platform: 'YouTube',
    icon: <Youtube size={20} />,
    url: 'https://www.youtube.com/watch?v=8m58xF2bnI8',
    views: '12.5K',
    title: 'Setup Tour & Tech Review',
    image: 'https://img.youtube.com/vi/8m58xF2bnI8/maxresdefault.jpg'
  },
  {
    platform: 'TikTok',
    icon: <TiktokIcon size={20} />,
    url: 'https://www.tiktok.com/@ajenaration/video/7563638573807766814',
    views: '45.2K',
    title: 'Mechanical Keyboard Build',
    image: 'https://csspicker.dev/api/image/?q=mechanical+keyboard&image_type=photo'
  },
  {
    platform: 'TikTok',
    icon: <TiktokIcon size={20} />,
    url: 'https://www.tiktok.com/@ajenaration/video/7563720367739505951',
    views: '82.1K',
    title: 'Day in the Life: Engineer',
    image: 'https://csspicker.dev/api/image/?q=coding+setup&image_type=photo'
  },
  {
    platform: 'TikTok',
    icon: <TiktokIcon size={20} />,
    url: 'https://www.tiktok.com/@ajenaration/video/7574134173900885279',
    views: '28.4K',
    title: 'Smart Home Integration',
    image: 'https://csspicker.dev/api/image/?q=smart+home&image_type=photo'
  },
  {
    platform: 'TikTok',
    icon: <TiktokIcon size={20} />,
    url: 'https://www.tiktok.com/@ajenaration/video/7574331979953474846',
    views: '156K',
    title: 'Viral Tech Tips',
    image: 'https://csspicker.dev/api/image/?q=tech+gadgets&image_type=photo'
  }
];