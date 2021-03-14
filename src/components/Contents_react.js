import React, { Component, Fragment } from 'react';
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const movieItems = [
  {
    src: require("../assets/img/captures/Movie/1.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Movie/2.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Movie/3.PNG"),
    altText: "",
    caption: "",
    header: ""
  }
];
const portfolioItems = [
  {
    src: require("../assets/img/captures/Portfolio/1.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Portfolio/2.PNG"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/captures/Portfolio/3.PNG"),
    altText: "",
    caption: "",
    header: ""
  }
];
class Contents_react extends Component {
    render() {
        return (
            <main className="my-5 py-5">
                <Container className="px-0">
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <div className="position-relative">
									<h4 className="display-4 mb-0">My Projects</h4>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
									  <Col className="mb-lg-auto" lg="5">
										<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
										  <UncontrolledCarousel items={movieItems} />
										</div>
									  </Col>
									  <Col>
										<p className="lead">
										  처음으로 react로 제작하게 된 것은 영화 평점 사이트에서 정보를 크롤링해와서 영화에 대한 평가를 보여주는 사이트였습니다.  <a href='https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%98%81%ED%99%94%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0'>인프런 강의</a>를 참고하여 제작하였으며, 기본 리액트에 대한 지식을 어느정도 습득한 상태에서 처음 만드는 프로젝트로, Mongo DB를 활용하여 작성하였습니다.
										</p>
									  </Col>
									</Row>
                                    </article>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
									<Row>
									  <Col className="mb-lg-auto" lg="5">
										<div className="rounded shadow-lg overflow-hidden transform-perspective-right">
										  <UncontrolledCarousel items={portfolioItems} />
										</div>
									  </Col>
									  <Col>
										<p className="lead">
										  강의 없이 만들게 된 두번째 react 프로젝트는 현재 보고계신 포트폴리오 페이지입니다. 메인 자기소개 화면은 <a href= 'https://github.com/Ikalli/ReactFolio'> github에 있는 포트폴리오 템플릿</a>을 clone하여 사용하였으며, 상세 프로젝트 페이지는 <a href='https://demos.creative-tim.com/argon-design-system-react/?_ga=2.130876940.24044457.1591229609-863939697.1586822509#/'> creative tim이 제공한 부트스트랩 팩</a>을 활용하여 자율적으로 작성하였습니다.
										</p>
									  </Col>
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
export default Contents_react;