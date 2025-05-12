import axios, { AxiosError } from 'axios';
import { appConfig } from '../configs/appConfig';
import { logger } from '../configs/logger';

export async function createAndSendBulletin(
  title: string,
  body: string,
  listName: string,
  slug: string,
  imageUrl?: string | null,
) {
  try {
    await axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://${process.env.GOV_DELIVERY_SUB_DOMAIN}.govdelivery.com/api/account/${process.env.GOV_DELIVERY_ACCOUNT_CODE}/bulletins/send_now`,
      auth: {
        username: process.env.GOV_DELIVERY_USERNAME!,
        password: process.env.GOV_DELIVERY_PASSWORD!,
      },
      headers: {
        'Content-Type': 'application/xml',
      },
      data: `<bulletin>
   <header>
      <![CDATA[
        <img 
          src="${!!imageUrl ? imageUrl : 'https://content.govdelivery.com/attachments/fancy_images/AKMATSUGOV/2024/11/10609030/5868415/msb-banner_crop.png'}"
          alt="Matsu Borough"
          style="max-width: 700px; width: 100%; max-height: 300px; display: block; object-fit: cover;" 
        />
      ]]>
   </header>
   <FROM_ADDRESS_ID>${process.env.GOV_DELIVERY_FROM_ADDRESS}</FROM_ADDRESS_ID>
   <subject>${title}</subject>
   <body><![CDATA[
    <div>
      <div style="padding: 14px; background-color: #004990; color: #ffffff; text-align: center;">
        <strong>
          <p style="line-height: 1.5; font-family: Arial, sans-serif; font-size: 18px; text-align: center;">${title}<p>
        </string>
      </div>
      <p style="margin-bottom: 8px; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.25;">
        Hello, this is a public notice from the Matanuska-Susitna Borough.
      </p>
      <p style="margin-bottom: 8px; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.25;">${body}<p/>
      <div style="text-align: center;">
        <a
          style="
            background-color: #004990;
            color: #ffffff;
            padding: 8px 16px;
            text-decoration: none;
            display: inline-block;
            border-radius: 4px;
            font-family: Arial, sans-serif;
            font-size: 16px;
            font-weight: bold;
            line-height: 1.5;
            text-align: center;
          "
          href="${appConfig.siteUrl}/${listName}/${slug}"
        >
          View More
        </a>
      </div>
    </div>
   ]]></body>
   <footer>
      <![CDATA[
      <div style="padding-top: 16px; border-top: 2px solid #ccc; margin-top: 16px;">
        <p style="margin-bottom: 8px; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.25; color: #0e0e0e">
          This email was sent to you because you are subscribed to Public Notice Emails from the Matanuska-Susitna Borough. <a href="https://public.govdelivery.com/accounts/AKMATSUGOV/subscriber/new?preferences=true">Manage your subscription</a>
        <p/>
        <p style="margin-bottom: 8px; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.25; color: #0e0e0e">
          This service is provided to you at no charge by the <a href="${appConfig.siteUrl}">Matanuska-Susitna Borough</a>.
        </p>
      </div>
      ]]>
   </footer>
   <publish_rss type='boolean'>false</publish_rss>
   <open_tracking type='boolean'>true</open_tracking>
   <click_tracking type='boolean'>true</click_tracking>
   <share_content_enabled type='boolean'>true</share_content_enabled>
   <topics type='array'>
     <topic>
       <code>AKMATSUGOVSTAGE_TEST_TOPIC</code>
     </topic>
   </topics>
   <categories type='array' />
 </bulletin>`,
    });
  } catch (err: any) {
    if (err.response) {
      logger.error('Error response:', err.response.data);
      logger.error('Status code:', err.response.status);
      logger.error('Headers:', err.response.headers);
    } else if (err.request) {
      logger.error('Error request:', err.request);
    } else {
      logger.error('Error message:', err.message);
    }
    logger.error('Error config:', err.config);
  }
}
