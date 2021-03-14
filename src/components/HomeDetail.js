import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const firstItems = [
  {
    src: require("../assets/img/captures/App/0001.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/App/0002.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/App/0006.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/App/0007.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
];
const secondItems = [
  {
    src: require("../assets/img/captures/Manual/1.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Manual/2.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Manual/3.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Manual/4.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];
class HomeDetail extends Component {
    render() {
        return (
            <main className="my-5 py-5">
                <Container className="px-0">
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <div className="position-relative">
									<h4 className="display-4 mb-0">Technical Writing</h4>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
										<Col md="1" />
										<Col md="10">
										<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
										  <UncontrolledCarousel items={firstItems} />
										</div>
										</Col>
										<Col md="1" />
									</Row>
									<Row>
										<Col md="1" />
										<Col md="10">
										<p className="lead">
											<br />입사하고 처음 요청받은 일은 앱 디자인 기획이였습니다. 어플의 목적은, 한국 서부발전에서 태양광 발전량, 일사량과 기온 등을 실시간으로 수집하는 데이터가 있는데, 그것을 각 지역별로 조회하고 관리할 수 있는 것이였습니다. 대학 시절 페이스북 관리자로 포토샵이 익숙했던 터로, 그 경험을 기반으로 첫 프로젝트를 무사히 끝낼 수 있었습니다. 카카오 오븐을 사용하여 기획했던 목업 링크를 첨부합니다.<br />
											<a href='https://ovenapp.io/view/8Gbl9UmcUprTUfcpAZLNpDbDs6VtNZnf'>https://ovenapp.io/view/8Gbl9UmcUprTUfcpAZLNpDbDs6VtNZnf</a>
										</p>
										</Col>
										<Col md="1" />
									</Row>
                                    </article>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
										<Col md="3" />
										<Col md="6">
											<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
												<UncontrolledCarousel items={secondItems} />
											</div>
										</Col>
										<Col md="3" />
									</Row>
									<Row />
									<Row>
										<Col md="1" />
										<Col md="10">
										<p className="lead">
											<br />약 3개월의 시간을 들여 사내 프로그램 매뉴얼 최신화 작업을 진행했습니다. 기존 매뉴얼이 너무 오래되어(2017년) 없는 부분이 너무 많았고, 자회사가 싱가포르에 생겨 영문매뉴얼이 필요하게 되어 영문화 작업도 함께 시작하였습니다. 해당 매뉴얼은 GS인증에서 인증받았습니다.
										</p>
										</Col>
										<Col md="1" />
									</Row>
                                    </article>
                                </div>
                            </Fragment>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default HomeDetail;