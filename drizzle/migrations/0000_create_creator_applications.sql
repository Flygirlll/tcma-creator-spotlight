CREATE TABLE public.creator_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  city_region TEXT NOT NULL,
  instagram_handle TEXT,
  tiktok_handle TEXT,
  youtube_channel TEXT,
  other_platform TEXT,
  niche TEXT NOT NULL,
  audience_size TEXT NOT NULL,
  engagement_rate TEXT,
  primary_audience_location TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('photo', 'video', 'both')),
  available_ugc BOOLEAN NOT NULL DEFAULT false,
  available_influencer BOOLEAN NOT NULL DEFAULT false,
  available_affiliate BOOLEAN NOT NULL DEFAULT false,
  portfolio_link TEXT,
  previous_brands TEXT,
  rate_range TEXT,
  introduction VARCHAR(300) NOT NULL,
  consent BOOLEAN NOT NULL CHECK (consent = true),
  status TEXT NOT NULL DEFAULT 'new',
  date_added TIMESTAMPTZ NOT NULL DEFAULT now(),
  notes TEXT NOT NULL DEFAULT ''
);
GRANT INSERT ON public.creator_applications TO anon;
GRANT INSERT ON public.creator_applications TO authenticated;
GRANT ALL ON public.creator_applications TO service_role;
ALTER TABLE public.creator_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a creator application"
ON public.creator_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (
  consent = true
  AND length(full_name) BETWEEN 2 AND 120
  AND length(email) BETWEEN 3 AND 254
  AND length(introduction) <= 300
  AND status = 'new'
  AND notes = ''
);