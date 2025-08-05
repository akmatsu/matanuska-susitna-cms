// see https://keystonejs.com/docs/config/config#extend-express-app

import { TypeInfo } from '.keystone/types';
import type { KeystoneContext, MaybePromise } from '@keystone-6/core/types';
import type { Session } from '../session';
import { json, type Express } from 'express';

import {
  createTypesenseCollections,
  importPages,
  removeCollection,
  updateTypesenseSchema,
} from '../controllers/typesenseController';
import {
  publishDraft,
  republishVersion,
} from '../controllers/DraftAndVersionControllers';

export const routes: (
  app: Express,
  context: KeystoneContext<TypeInfo<Session>>,
) => MaybePromise<void> = async (app, commonContext) => {
  app.post(
    '/typesense/create-collections',
    json(),
    createTypesenseCollections(),
  );

  app.post('/typesense/update-schema', json(), updateTypesenseSchema());
  app.post('/typesense/import-pages', json(), importPages(commonContext));
  app.post('/typesense/remove-collection', json(), removeCollection());
  app.patch('/publish/:list/:id', json(), publishDraft(commonContext));
  app.patch('/republish/:list/:id', json(), republishVersion(commonContext));
  app.patch('/api/documents', json(), async (req, res) => {
    try {
      const sudoCtx = commonContext.sudo();

      const query = {
        where: {
          documents: {
            some: {
              title: {
                contains: '',
              },
            },
          },
        },
        query: 'id documents { id }',
      };

      function updateDocuments(item: any) {
        return {
          where: { id: item.id },
          data: {
            newDocuments: {
              create: item.documents.map((document: { id: string }) => ({
                document: {
                  connect: document,
                },
              })),
            },
          },
        };
      }

      // Services
      const servicesWithDocuments = await sudoCtx.query.Service.findMany(query);
      servicesWithDocuments.forEach((service) => {
        sudoCtx.db.Service.updateOne(updateDocuments(service));
      });

      // ServiceDrafts
      const serviceDraftsWithDocuments =
        await sudoCtx.query.ServiceDraft.findMany(query);
      serviceDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.ServiceDraft.updateOne(updateDocuments(draft));
      });

      // ServiceVersions
      const serviceVersionsWithDocuments =
        await sudoCtx.query.ServiceVersion.findMany(query);
      serviceVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.ServiceVersion.updateOne(updateDocuments(version));
      });

      // AssemblyDistricts
      const assemblyDistrictsWithDocuments =
        await sudoCtx.query.AssemblyDistrict.findMany(query);
      assemblyDistrictsWithDocuments.forEach((district) => {
        sudoCtx.db.AssemblyDistrict.updateOne(updateDocuments(district));
      });

      // AssemblyDistrictDrafts
      const assemblyDistrictDraftsWithDocuments =
        await sudoCtx.query.AssemblyDistrictDraft.findMany(query);
      assemblyDistrictDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.AssemblyDistrictDraft.updateOne(updateDocuments(draft));
      });

      // AssemblyDistrictVersions
      const assemblyDistrictVersionsWithDocuments =
        await sudoCtx.query.AssemblyDistrictVersion.findMany(query);
      assemblyDistrictVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.AssemblyDistrictVersion.updateOne(updateDocuments(version));
      });

      // Boards
      const boardsWithDocuments = await sudoCtx.query.Board.findMany(query);
      boardsWithDocuments.forEach((board) => {
        sudoCtx.db.Board.updateOne(updateDocuments(board));
      });

      // BoardDrafts
      const boardDraftsWithDocuments =
        await sudoCtx.query.BoardDraft.findMany(query);
      boardDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.BoardDraft.updateOne(updateDocuments(draft));
      });

      // BoardVersions
      const boardVersionsWithDocuments =
        await sudoCtx.query.BoardVersion.findMany(query);
      boardVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.BoardVersion.updateOne(updateDocuments(version));
      });

      // Communities
      const communitiesWithDocuments =
        await sudoCtx.query.Community.findMany(query);
      communitiesWithDocuments.forEach((community) => {
        sudoCtx.db.Community.updateOne(updateDocuments(community));
      });

      // CommunityDrafts
      const communityDraftsWithDocuments =
        await sudoCtx.query.CommunityDraft.findMany(query);
      communityDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.CommunityDraft.updateOne(updateDocuments(draft));
      });

      // CommunityVersions
      const communityVersionsWithDocuments =
        await sudoCtx.query.CommunityVersion.findMany(query);
      communityVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.CommunityVersion.updateOne(updateDocuments(version));
      });

      // OrgUnits
      const orgUnitsWithDocuments = await sudoCtx.query.OrgUnit.findMany(query);
      orgUnitsWithDocuments.forEach((orgUnit) => {
        sudoCtx.db.OrgUnit.updateOne(updateDocuments(orgUnit));
      });

      // OrgUnitDrafts
      const orgUnitDraftsWithDocuments =
        await sudoCtx.query.OrgUnitDraft.findMany(query);
      orgUnitDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.OrgUnitDraft.updateOne(updateDocuments(draft));
      });

      // Parks
      const parksWithDocuments = await sudoCtx.query.Park.findMany(query);
      parksWithDocuments.forEach((park) => {
        sudoCtx.db.Park.updateOne(updateDocuments(park));
      });

      // ParkDrafts
      const parkDraftsWithDocuments =
        await sudoCtx.query.ParkDraft.findMany(query);
      parkDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.ParkDraft.updateOne(updateDocuments(draft));
      });

      // ParkVersions
      const parkVersionsWithDocuments =
        await sudoCtx.query.ParkVersion.findMany(query);
      parkVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.ParkVersion.updateOne(updateDocuments(version));
      });

      // PublicNotices
      const publicNoticesWithDocuments =
        await sudoCtx.query.PublicNotice.findMany(query);
      publicNoticesWithDocuments.forEach((notice) => {
        sudoCtx.db.PublicNotice.updateOne(updateDocuments(notice));
      });

      // PublicNoticeDrafts
      const publicNoticeDraftsWithDocuments =
        await sudoCtx.query.PublicNoticeDraft.findMany(query);
      publicNoticeDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.PublicNoticeDraft.updateOne(updateDocuments(draft));
      });

      // PublicNoticeVersions
      const publicNoticeVersionsWithDocuments =
        await sudoCtx.query.PublicNoticeVersion.findMany(query);
      publicNoticeVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.PublicNoticeVersion.updateOne(updateDocuments(version));
      });

      // Topics
      const topicsWithDocuments = await sudoCtx.query.Topic.findMany(query);
      topicsWithDocuments.forEach((topic) => {
        sudoCtx.db.Topic.updateOne(updateDocuments(topic));
      });

      // TopicDrafts
      const topicDraftsWithDocuments =
        await sudoCtx.query.TopicDraft.findMany(query);
      topicDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.TopicDraft.updateOne(updateDocuments(draft));
      });

      // TopicVersions
      const topicVersionsWithDocuments =
        await sudoCtx.query.TopicVersion.findMany(query);
      topicVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.TopicVersion.updateOne(updateDocuments(version));
      });

      // Trails
      const trailsWithDocuments = await sudoCtx.query.Trail.findMany(query);
      trailsWithDocuments.forEach((trail) => {
        sudoCtx.db.Trail.updateOne(updateDocuments(trail));
      });

      // TrailDrafts
      const trailDraftsWithDocuments =
        await sudoCtx.query.TrailDraft.findMany(query);
      trailDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.TrailDraft.updateOne(updateDocuments(draft));
      });

      // TrailVersions
      const trailVersionsWithDocuments =
        await sudoCtx.query.TrailVersion.findMany(query);
      trailVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.TrailVersion.updateOne(updateDocuments(version));
      });

      // Facilities
      const facilitiesWithDocuments =
        await sudoCtx.query.Facility.findMany(query);
      facilitiesWithDocuments.forEach((facility) => {
        sudoCtx.db.Facility.updateOne(updateDocuments(facility));
      });

      // FacilityDrafts
      const facilityDraftsWithDocuments =
        await sudoCtx.query.FacilityDraft.findMany(query);
      facilityDraftsWithDocuments.forEach((draft) => {
        sudoCtx.db.FacilityDraft.updateOne(updateDocuments(draft));
      });

      // FacilityVersions
      const facilityVersionsWithDocuments =
        await sudoCtx.query.FacilityVersion.findMany(query);
      facilityVersionsWithDocuments.forEach((version) => {
        sudoCtx.db.FacilityVersion.updateOne(updateDocuments(version));
      });

      const boardPage = await sudoCtx.query.BoardPage.findOne({
        where: { id: '1' },
        query: 'id documents { id }',
      });

      sudoCtx.db.BoardPage.updateOne({
        where: { id: boardPage.id },
        data: {
          newDocuments: {
            create: boardPage.documents.map((document: { id: string }) => ({
              document: {
                connect: document,
              },
            })),
          },
        },
      });

      const documentCollectionWithDocuments =
        await sudoCtx.query.DocumentCollection.findMany(query);
      documentCollectionWithDocuments.forEach((collection) => {
        sudoCtx.db.DocumentCollection.updateOne({
          where: { id: collection.id },
          data: {
            newDocuments: {
              create: collection.documents.map((document: { id: string }) => ({
                document: {
                  connect: document,
                },
              })),
            },
          },
        });
      });

      return res.status(200).json({
        message: 'Documents updated successfully',
        services: servicesWithDocuments.map((service) => service.id),
        serviceDrafts: serviceDraftsWithDocuments.map((draft) => draft.id),
        serviceVersions: serviceVersionsWithDocuments.map(
          (version) => version.id,
        ),
        assemblyDistricts: assemblyDistrictsWithDocuments.map(
          (district) => district.id,
        ),
        assemblyDistrictDrafts: assemblyDistrictDraftsWithDocuments.map(
          (draft) => draft.id,
        ),
        assemblyDistrictVersions: assemblyDistrictVersionsWithDocuments.map(
          (version) => version.id,
        ),
        boards: boardsWithDocuments.map((board) => board.id),
        boardDrafts: boardDraftsWithDocuments.map((draft) => draft.id),
        boardVersions: boardVersionsWithDocuments.map((version) => version.id),
        communities: communitiesWithDocuments.map((community) => community.id),
        communityDrafts: communityDraftsWithDocuments.map((draft) => draft.id),
        communityVersions: communityVersionsWithDocuments.map(
          (version) => version.id,
        ),
        orgUnits: orgUnitsWithDocuments.map((orgUnit) => orgUnit.id),
        orgUnitDrafts: orgUnitDraftsWithDocuments.map((draft) => draft.id),
        parks: parksWithDocuments.map((park) => park.id),
        parkDrafts: parkDraftsWithDocuments.map((draft) => draft.id),
        parkVersions: parkVersionsWithDocuments.map((version) => version.id),
        publicNotices: publicNoticesWithDocuments.map((notice) => notice.id),
        publicNoticeDrafts: publicNoticeDraftsWithDocuments.map(
          (draft) => draft.id,
        ),
        publicNoticeVersions: publicNoticeVersionsWithDocuments.map(
          (version) => version.id,
        ),
        topics: topicsWithDocuments.map((topic) => topic.id),
        topicDrafts: topicDraftsWithDocuments.map((draft) => draft.id),
        topicVersions: topicVersionsWithDocuments.map((version) => version.id),
        trails: trailsWithDocuments.map((trail) => trail.id),
        trailDrafts: trailDraftsWithDocuments.map((draft) => draft.id),
        trailVersions: trailVersionsWithDocuments.map((version) => version.id),
        facilities: facilitiesWithDocuments.map((facility) => facility.id),
        facilityDrafts: facilityDraftsWithDocuments.map((draft) => draft.id),
        facilityVersions: facilityVersionsWithDocuments.map(
          (version) => version.id,
        ),
        documentCollections: documentCollectionWithDocuments.map(
          (collection) => collection.id,
        ),
        boardPages: boardPage ? [boardPage.id] : [],
      });
    } catch (error: any) {
      console.error('Error updating documents:', error);
      return res
        .status(500)
        .json({ message: 'Failed to update documents', error: error });
    }
  });
  app.patch('/api/contacts', json(), async (req, res) => {
    try {
      const sudoCtx = commonContext.sudo();

      const query = {
        where: {
          contacts: {
            some: {
              name: {
                contains: '',
              },
            },
          },
        },
        query: 'id contacts { id }',
      };

      function updateContacts(item: any) {
        return {
          where: { id: item.id },
          data: {
            newContacts: {
              create: item.contacts.map((contact: { id: string }) => ({
                contact: {
                  connect: contact,
                },
              })),
            },
          },
        };
      }

      // Services
      const servicesWithContacts = await sudoCtx.query.Service.findMany(query);
      servicesWithContacts.forEach((service) => {
        sudoCtx.db.Service.updateOne(updateContacts(service));
      });

      // ServiceDrafts
      const serviceDraftsWithContacts =
        await sudoCtx.query.ServiceDraft.findMany(query);
      serviceDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.ServiceDraft.updateOne(updateContacts(draft));
      });

      // ServiceVersions
      const serviceVersionsWithContacts =
        await sudoCtx.query.ServiceVersion.findMany(query);
      serviceVersionsWithContacts.forEach((version) => {
        sudoCtx.db.ServiceVersion.updateOne(updateContacts(version));
      });

      // AssemblyDistricts
      const assemblyDistrictsWithContacts =
        await sudoCtx.query.AssemblyDistrict.findMany(query);
      assemblyDistrictsWithContacts.forEach((district) => {
        sudoCtx.db.AssemblyDistrict.updateOne(updateContacts(district));
      });

      // AssemblyDistrictDrafts
      const assemblyDistrictDraftsWithContacts =
        await sudoCtx.query.AssemblyDistrictDraft.findMany(query);
      assemblyDistrictDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.AssemblyDistrictDraft.updateOne(updateContacts(draft));
      });

      // AssemblyDistrictVersions
      const assemblyDistrictVersionsWithContacts =
        await sudoCtx.query.AssemblyDistrictVersion.findMany(query);
      assemblyDistrictVersionsWithContacts.forEach((version) => {
        sudoCtx.db.AssemblyDistrictVersion.updateOne(updateContacts(version));
      });

      // Boards
      const boardsWithContacts = await sudoCtx.query.Board.findMany(query);
      boardsWithContacts.forEach((board) => {
        sudoCtx.db.Board.updateOne(updateContacts(board));
      });

      // BoardDrafts
      const boardDraftsWithContacts =
        await sudoCtx.query.BoardDraft.findMany(query);
      boardDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.BoardDraft.updateOne(updateContacts(draft));
      });

      // BoardVersions
      const boardVersionsWithContacts =
        await sudoCtx.query.BoardVersion.findMany(query);
      boardVersionsWithContacts.forEach((version) => {
        sudoCtx.db.BoardVersion.updateOne(updateContacts(version));
      });

      // Communities
      const communitiesWithContacts =
        await sudoCtx.query.Community.findMany(query);
      communitiesWithContacts.forEach((community) => {
        sudoCtx.db.Community.updateOne(updateContacts(community));
      });

      // CommunityDrafts
      const communityDraftsWithContacts =
        await sudoCtx.query.CommunityDraft.findMany(query);
      communityDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.CommunityDraft.updateOne(updateContacts(draft));
      });

      // CommunityVersions
      const communityVersionsWithContacts =
        await sudoCtx.query.CommunityVersion.findMany(query);
      communityVersionsWithContacts.forEach((version) => {
        sudoCtx.db.CommunityVersion.updateOne(updateContacts(version));
      });

      // Facilities
      const facilitiesWithContacts =
        await sudoCtx.query.Facility.findMany(query);
      facilitiesWithContacts.forEach((facility) => {
        sudoCtx.db.Facility.updateOne(updateContacts(facility));
      });

      // FacilityDrafts
      const facilityDraftsWithContacts =
        await sudoCtx.query.FacilityDraft.findMany(query);
      facilityDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.FacilityDraft.updateOne(updateContacts(draft));
      });

      // FacilityVersions
      const facilityVersionsWithContacts =
        await sudoCtx.query.FacilityVersion.findMany(query);
      facilityVersionsWithContacts.forEach((version) => {
        sudoCtx.db.FacilityVersion.updateOne(updateContacts(version));
      });

      // OrgUnits
      const orgUnitsWithContacts = await sudoCtx.query.OrgUnit.findMany(query);
      orgUnitsWithContacts.forEach((orgUnit) => {
        sudoCtx.db.OrgUnit.updateOne(updateContacts(orgUnit));
      });

      // OrgUnitDrafts
      const orgUnitDraftsWithContacts =
        await sudoCtx.query.OrgUnitDraft.findMany(query);
      orgUnitDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.OrgUnitDraft.updateOne(updateContacts(draft));
      });

      // OrgUnitVersions
      const orgUnitVersionsWithContacts =
        await sudoCtx.query.OrgUnitVersion.findMany(query);
      orgUnitVersionsWithContacts.forEach((version) => {
        sudoCtx.db.OrgUnitVersion.updateOne(updateContacts(version));
      });

      // Parks
      const parksWithContacts = await sudoCtx.query.Park.findMany(query);
      parksWithContacts.forEach((park) => {
        sudoCtx.db.Park.updateOne(updateContacts(park));
      });

      // ParkDrafts
      const parkDraftsWithContacts =
        await sudoCtx.query.ParkDraft.findMany(query);
      parkDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.ParkDraft.updateOne(updateContacts(draft));
      });

      // ParkVersions
      const parkVersionsWithContacts =
        await sudoCtx.query.ParkVersion.findMany(query);
      parkVersionsWithContacts.forEach((version) => {
        sudoCtx.db.ParkVersion.updateOne(updateContacts(version));
      });

      // PublicNotices
      const publicNoticesWithContacts =
        await sudoCtx.query.PublicNotice.findMany(query);
      publicNoticesWithContacts.forEach((notice) => {
        sudoCtx.db.PublicNotice.updateOne(updateContacts(notice));
      });

      // PublicNoticeDrafts
      const publicNoticeDraftsWithContacts =
        await sudoCtx.query.PublicNoticeDraft.findMany(query);
      publicNoticeDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.PublicNoticeDraft.updateOne(updateContacts(draft));
      });

      // PublicNoticeVersions
      const publicNoticeVersionsWithContacts =
        await sudoCtx.query.PublicNoticeVersion.findMany(query);
      publicNoticeVersionsWithContacts.forEach((version) => {
        sudoCtx.db.PublicNoticeVersion.updateOne(updateContacts(version));
      });

      // Topics
      const topicsWithContacts = await sudoCtx.query.Topic.findMany(query);
      topicsWithContacts.forEach((topic) => {
        sudoCtx.db.Topic.updateOne(updateContacts(topic));
      });

      // TopicDrafts
      const topicDraftsWithContacts =
        await sudoCtx.query.TopicDraft.findMany(query);
      topicDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.TopicDraft.updateOne(updateContacts(draft));
      });

      // TopicVersions
      const topicVersionsWithContacts =
        await sudoCtx.query.TopicVersion.findMany(query);
      topicVersionsWithContacts.forEach((version) => {
        sudoCtx.db.TopicVersion.updateOne(updateContacts(version));
      });

      // Trails
      const trailsWithContacts = await sudoCtx.query.Trail.findMany(query);
      trailsWithContacts.forEach((trail) => {
        sudoCtx.db.Trail.updateOne(updateContacts(trail));
      });

      // TrailDrafts
      const trailDraftsWithContacts =
        await sudoCtx.query.TrailDraft.findMany(query);
      trailDraftsWithContacts.forEach((draft) => {
        sudoCtx.db.TrailDraft.updateOne(updateContacts(draft));
      });

      // TrailVersions
      const trailVersionsWithContacts =
        await sudoCtx.query.TrailVersion.findMany(query);
      trailVersionsWithContacts.forEach((version) => {
        sudoCtx.db.TrailVersion.updateOne(updateContacts(version));
      });

      // BoardPage
      const boardPage = await sudoCtx.query.BoardPage.findOne({
        where: { id: '1' },
        query: 'id contacts { id }',
      });
      sudoCtx.db.BoardPage.updateOne({
        where: { id: boardPage.id },
        data: {
          newContacts: {
            create: boardPage.contacts.map((contact: { id: string }) => ({
              contact: {
                connect: contact,
              },
            })),
          },
        },
      });

      return res.status(200).json({
        message: 'Contacts updated successfully',
        services: servicesWithContacts.map((service) => service.id),
        serviceDrafts: serviceDraftsWithContacts.map((draft) => draft.id),
        serviceVersions: serviceVersionsWithContacts.map(
          (version) => version.id,
        ),
        assemblyDistricts: assemblyDistrictsWithContacts.map(
          (district) => district.id,
        ),
        assemblyDistrictDrafts: assemblyDistrictDraftsWithContacts.map(
          (draft) => draft.id,
        ),
        assemblyDistrictVersions: assemblyDistrictVersionsWithContacts.map(
          (version) => version.id,
        ),
        boards: boardsWithContacts.map((board) => board.id),
        boardDrafts: boardDraftsWithContacts.map((draft) => draft.id),
        boardVersions: boardVersionsWithContacts.map((version) => version.id),
        communities: communitiesWithContacts.map((community) => community.id),
        communityDrafts: communityDraftsWithContacts.map((draft) => draft.id),
        communityVersions: communityVersionsWithContacts.map(
          (version) => version.id,
        ),
        facilities: facilitiesWithContacts.map((facility) => facility.id),
        facilityDrafts: facilityDraftsWithContacts.map((draft) => draft.id),
        facilityVersions: facilityVersionsWithContacts.map(
          (version) => version.id,
        ),
        orgUnits: orgUnitsWithContacts.map((orgUnit) => orgUnit.id),
        orgUnitDrafts: orgUnitDraftsWithContacts.map((draft) => draft.id),
        orgUnitVersions: orgUnitVersionsWithContacts.map(
          (version) => version.id,
        ),
        parks: parksWithContacts.map((park) => park.id),
        parkDrafts: parkDraftsWithContacts.map((draft) => draft.id),
        parkVersions: parkVersionsWithContacts.map((version) => version.id),
        publicNotices: publicNoticesWithContacts.map((notice) => notice.id),
        publicNoticeDrafts: publicNoticeDraftsWithContacts.map(
          (draft) => draft.id,
        ),
        publicNoticeVersions: publicNoticeVersionsWithContacts.map(
          (version) => version.id,
        ),
        topics: topicsWithContacts.map((topic) => topic.id),
        topicDrafts: topicDraftsWithContacts.map((draft) => draft.id),
        topicVersions: topicVersionsWithContacts.map((version) => version.id),
        trails: trailsWithContacts.map((trail) => trail.id),
        trailDrafts: trailDraftsWithContacts.map((draft) => draft.id),
        trailVersions: trailVersionsWithContacts.map((version) => version.id),
        boardPages: boardPage ? [boardPage.id] : [],
      });
    } catch (error: any) {
      console.error('Error updating contacts:', error);
      return res
        .status(500)
        .json({ message: 'Failed to update contacts', error: error });
    }
  });
};
