import axios from 'axios';
import { logger } from '../../configs/logger';
import { XMLParser } from 'fast-xml-parser';

export interface GovDeliveryTopic {
  name: string;
  'short-name': string;
  code: string;
  description?: string | null;
  'wireless-enabled': boolean;
  visibility: string;
  link?: string | null;
  'topic-uri': string;
}

export async function getGovDeliveryTopics(): Promise<
  GovDeliveryTopic[] | undefined
> {
  try {
    // Fetch GovDelivery topics here
    const govDeliveryUrl = new URL(
      `https://${process.env.GOV_DELIVERY_SUB_DOMAIN}.govdelivery.com/api/account/${process.env.GOV_DELIVERY_ACCOUNT_CODE}/categories/AKMATSUGOVSTAGE_PUBLIC_NOTICES_CAT/topics`,
    );
    const topicsXml = await axios.get(govDeliveryUrl.toString(), {
      maxBodyLength: Infinity,
      auth: {
        username: process.env.GOV_DELIVERY_USERNAME || '',
        password: process.env.GOV_DELIVERY_PASSWORD || '',
      },
    });

    if (topicsXml && topicsXml.data) {
      const parser = new XMLParser();
      const topicsJson = parser.parse(topicsXml.data).topics.topic;
      return topicsJson;
    }
    throw new Error('No GovDelivery topics found');
  } catch (error: unknown) {
    logger.error(error, 'Failed to get GovDelivery topics');
  }
}
