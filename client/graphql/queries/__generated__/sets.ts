/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SetFilters, Stat } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: sets
// ====================================================

export interface sets_sets_edges_node_bonuses {
  __typename: "SetBonus";
  id: any;
  numItems: number;
  stat: Stat | null;
  value: number | null;
  altStat: string | null;
}

export interface sets_sets_edges_node_items_stats {
  __typename: "ItemStats";
  maxValue: number | null;
  stat: Stat | null;
  altStat: string | null;
}

export interface sets_sets_edges_node_items_itemType_eligibleItemSlots {
  __typename: "ItemSlot";
  id: any;
}

export interface sets_sets_edges_node_items_itemType {
  __typename: "ItemType";
  id: any;
  name: string;
  eligibleItemSlots: sets_sets_edges_node_items_itemType_eligibleItemSlots[];
}

export interface sets_sets_edges_node_items_set_bonuses {
  __typename: "SetBonus";
  id: any;
  numItems: number;
  stat: Stat | null;
  value: number | null;
  altStat: string | null;
}

export interface sets_sets_edges_node_items_set {
  __typename: "Set";
  id: any;
  name: string;
  bonuses: sets_sets_edges_node_items_set_bonuses[];
}

export interface sets_sets_edges_node_items {
  __typename: "Item";
  id: any;
  name: string;
  level: number;
  imageUrl: string;
  stats: sets_sets_edges_node_items_stats[];
  conditions: any | null;
  itemType: sets_sets_edges_node_items_itemType;
  set: sets_sets_edges_node_items_set | null;
}

export interface sets_sets_edges_node {
  __typename: "Set";
  id: any;
  name: string;
  bonuses: sets_sets_edges_node_bonuses[];
  items: sets_sets_edges_node_items[];
}

export interface sets_sets_edges {
  __typename: "SetEdge";
  node: sets_sets_edges_node;
}

export interface sets_sets_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface sets_sets {
  __typename: "SetConnection";
  edges: sets_sets_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: sets_sets_pageInfo;
}

export interface sets {
  sets: sets_sets;
}

export interface setsVariables {
  first: number;
  after?: string | null;
  filters: SetFilters;
}
