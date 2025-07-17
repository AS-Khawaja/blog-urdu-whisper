import Blog from "../models/blog.model.js";
import { supabase } from '../config/supabase.js';
import * as cheerio from 'cheerio';
import googleTranslate from 'node-google-translate-skidz';



export const summarise=async(req,res)=>{

   const { url } = req.body;

   if (!url) {
      return res.status(400).json({ success: false, message: 'URL is required' });
   }

   try {
    // Fetch HTML
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);
    const text = $('body').text().replace(/\s+/g, ' ').trim();

    const summary_en = text.split(' ').slice(0, 50).join(' ') + '...';

    // Translate to Urdu using free Google Translate API
    let summary_ur = '';
    try {
      summary_ur = await new Promise((resolve, reject) => {
        googleTranslate({
          text: summary_en,
          source: 'en',
          target: 'ur'
        }, function(result) {
          if (result && result.translation) {
            resolve(result.translation);
          } else {
            reject(new Error('Translation failed'));
          }
        });
      });
    } catch (translateError) {
      console.error('Translation error:', translateError);
      summary_ur = summary_en; // Fallback to English if translation fails
    }

    // Save to Supabase
      const { data, error } = await supabase
      .from('summaries')
      .insert([{ url, summary_en, summary_ur }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ success: false, message: 'Supabase insert failed' });
    } else {
      console.log('Supabase insert OK:', data);
    }

    // Save to MongoDB
    //await connectToDatabase();
    await Blog.create({ url, full_text: text });

    res.json({ success: true, summary_en, summary_ur });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}

